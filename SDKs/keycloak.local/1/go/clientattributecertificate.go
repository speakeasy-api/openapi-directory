package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ClientAttributeCertificate struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewClientAttributeCertificate(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ClientAttributeCertificate {
	return &ClientAttributeCertificate{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRealmClientsIDCertificatesAttr - Get key info
func (s *ClientAttributeCertificate) GetRealmClientsIDCertificatesAttr(ctx context.Context, request operations.GetRealmClientsIDCertificatesAttrRequest) (*operations.GetRealmClientsIDCertificatesAttrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmClientsIDCertificatesAttrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrDownload - Get a keystore file for the client, containing private key and public certificate
func (s *ClientAttributeCertificate) PostRealmClientsIDCertificatesAttrDownload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrDownloadRequest) (*operations.PostRealmClientsIDCertificatesAttrDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/download", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmClientsIDCertificatesAttrDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PostRealmClientsIDCertificatesAttrDownload2XXApplicationOctetStreamByteString = &out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrGenerate - Generate a new certificate with new key pair
func (s *ClientAttributeCertificate) PostRealmClientsIDCertificatesAttrGenerate(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrGenerateRequest) (*operations.PostRealmClientsIDCertificatesAttrGenerateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmClientsIDCertificatesAttrGenerateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrGenerateAndDownload - Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.
func (s *ClientAttributeCertificate) PostRealmClientsIDCertificatesAttrGenerateAndDownload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadRequest) (*operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/generate-and-download", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmClientsIDCertificatesAttrGenerateAndDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.PostRealmClientsIDCertificatesAttrGenerateAndDownload2XXApplicationOctetStreamByteString = &out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrUpload - Upload certificate and eventually private key
func (s *ClientAttributeCertificate) PostRealmClientsIDCertificatesAttrUpload(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrUploadRequest) (*operations.PostRealmClientsIDCertificatesAttrUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmClientsIDCertificatesAttrUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}

// PostRealmClientsIDCertificatesAttrUploadCertificate - Upload only certificate, not private key
func (s *ClientAttributeCertificate) PostRealmClientsIDCertificatesAttrUploadCertificate(ctx context.Context, request operations.PostRealmClientsIDCertificatesAttrUploadCertificateRequest) (*operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/certificates/{attr}/upload-certificate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmClientsIDCertificatesAttrUploadCertificateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CertificateRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CertificateRepresentation = out
		}
	}

	return res, nil
}
