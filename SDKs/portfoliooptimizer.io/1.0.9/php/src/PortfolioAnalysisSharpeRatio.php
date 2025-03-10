<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class PortfolioAnalysisSharpeRatio 
{

	// SDK private variables namespaced with _ to avoid conflicts with API models
	private \GuzzleHttp\ClientInterface $_defaultClient;
	private \GuzzleHttp\ClientInterface $_securityClient;
	private string $_serverUrl;
	private string $_language;
	private string $_sdkVersion;
	private string $_genVersion;	

	/**
	 * @param \GuzzleHttp\ClientInterface $defaultClient
	 * @param \GuzzleHttp\ClientInterface $securityClient
	 * @param string $serverUrl
	 * @param string $language
	 * @param string $sdkVersion
	 * @param string $genVersion
	 */
	public function __construct(\GuzzleHttp\ClientInterface $defaultClient, \GuzzleHttp\ClientInterface $securityClient, string $serverUrl, string $language, string $sdkVersion, string $genVersion)
	{
		$this->_defaultClient = $defaultClient;
		$this->_securityClient = $securityClient;
		$this->_serverUrl = $serverUrl;
		$this->_language = $language;
		$this->_sdkVersion = $sdkVersion;
		$this->_genVersion = $genVersion;
	}
	
    /**
     * Sharpe Ratio
     * 
     * Compute the Sharpe ratio of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns and assets covariance matrix
     * * Portfolio values
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
     * 
     * @param mixed $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioResponse
     */
	public function postPortfolioAnalysisSharpeRatio(
        mixed $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/portfolio/analysis/sharpe-ratio');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->postPortfolioAnalysisSharpeRatio200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatio200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Bias-Adjusted Sharpe Ratio
     * 
     * Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.
     * 
     * References
     * * [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse
     */
	public function postPortfolioAnalysisSharpeRatioBiasAdjusted(
        \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedRequestBody $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/portfolio/analysis/sharpe-ratio/bias-adjusted');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjustedResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->postPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioBiasAdjusted200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sharpe Ratio Confidence Interval
     * 
     * Build a confidence interval for the Sharpe ratio of one or several portfolio(s).
     * 
     * References
     * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse
     */
	public function postPortfolioAnalysisSharpeRatioConfidenceInterval(
        \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/portfolio/analysis/sharpe-ratio/confidence-interval');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->postPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Probabilistic Sharpe Ratio
     * 
     * Compute the probabilistic Sharpe ratio of one or several portfolio(s).
     * 
     * References
     * * [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
     * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
     * 
     * 
     * @param mixed $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticResponse
     */
	public function postPortfolioAnalysisSharpeRatioProbabilistic(
        mixed $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/portfolio/analysis/sharpe-ratio/probabilistic');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->postPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilistic200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Minimum Track Record Length
     * 
     * Compute the minimum track record length of one or several portfolio(s).
     * 
     * References
     * * [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)
     * 
     * 
     * @param mixed $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse
     */
	public function postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength(
        mixed $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLength200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
}