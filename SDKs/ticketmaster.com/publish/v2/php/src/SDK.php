<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

/**
 * SDK - Publish API
 * 
 * @package OpenAPI\OpenAPI
 * @access public
 */
class SDK
{
	public const SERVERS = [
		'//www.ticketmaster.com/publish/v2',
	];
  		
	// SDK private variables namespaced with _ to avoid conflicts with API models
	private ?\GuzzleHttp\ClientInterface $_defaultClient;
	private ?\GuzzleHttp\ClientInterface $_securityClient;
	
	private string $_serverUrl;
	private string $_language = 'php';
	private string $_sdkVersion = '0.0.1';
	private string $_genVersion = 'internal';

	/**
	 * Returns a new instance of the SDK builder used to configure and create the SDK instance.
	 * 
	 * @return SDKBuilder
	 */
	public static function builder(): SDKBuilder
	{
		return new SDKBuilder();
	}

	/**
	 * @param \GuzzleHttp\ClientInterface|null $client
	 * @param string $serverUrl
	 * @param array<string, string>|null $params
	 */
	public function __construct(?\GuzzleHttp\ClientInterface $client, string $serverUrl, ?array $params)
	{
		$this->_defaultClient = $client;
		
		if ($this->_defaultClient === null) {
			$this->_defaultClient = new \GuzzleHttp\Client([
				'timeout' => 60,
			]);
		}

		$this->_securityClient = null;
		if ($this->_securityClient === null) {
			$this->_securityClient = $this->_defaultClient;
		}

		if (!empty($serverUrl)) {
			$this->_serverUrl = Utils\Utils::templateUrl($serverUrl, $params);
		}
		
		if (empty($this->_serverUrl)) {
			$this->_serverUrl = $this::SERVERS[0];
		}
	}
	
    /**
     * Publish a patch on an attraction
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PatchAttractionRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PatchAttractionResponse
     */
	public function patchAttraction(
        \OpenAPI\OpenAPI\Models\Operations\PatchAttractionRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PatchAttractionResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/attractions/{id}', \OpenAPI\OpenAPI\Models\Operations\PatchAttractionRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "augmentationData", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PatchAttractionResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish a patch on an event
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PatchEventRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PatchEventResponse
     */
	public function patchEvent(
        \OpenAPI\OpenAPI\Models\Operations\PatchEventRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PatchEventResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/events/{id}', \OpenAPI\OpenAPI\Models\Operations\PatchEventRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "augmentationData", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PatchEventResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish a patch on a venue
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PatchVenueRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PatchVenueResponse
     */
	public function patchVenue(
        \OpenAPI\OpenAPI\Models\Operations\PatchVenueRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PatchVenueResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/venues/{id}', \OpenAPI\OpenAPI\Models\Operations\PatchVenueRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "augmentationData", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PatchVenueResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish an attractions
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishAttractionRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishAttractionResponse
     */
	public function publishAttraction(
        \OpenAPI\OpenAPI\Models\Operations\PublishAttractionRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishAttractionResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/attractions');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "attraction", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishAttractionResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish a video on an attraction
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosResponse
     */
	public function publishAttractionVideos(
        \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/attractions/{id}/videos', \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "video", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishAttractionVideosResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish entitlements on an entity
     * 
     * Since 2.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsResponse
     */
	public function publishEntitlements(
        \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/entitlements');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "entitlement", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishEntitlementsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish an event
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishEventRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishEventResponse
     */
	public function publishEvent(
        \OpenAPI\OpenAPI\Models\Operations\PublishEventRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishEventResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/events');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "event", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishEventResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish a video on an event
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosResponse
     */
	public function publishEventVideos(
        \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/events/{id}/videos', \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "video", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishEventVideosResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish extension on an entity
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishExtensionRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishExtensionResponse
     */
	public function publishExtension(
        \OpenAPI\OpenAPI\Models\Operations\PublishExtensionRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishExtensionResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/extensions');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "extensionData", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishExtensionResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
	
    /**
     * Publish a venue
     * 
     * Since 1.0.0
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PublishVenueRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PublishVenueResponse
     */
	public function publishVenue(
        \OpenAPI\OpenAPI\Models\Operations\PublishVenueRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PublishVenueResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/publish/v2/venues');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "venue", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getHeaders($request));
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PublishVenueResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, '*/*')) {
                $response->body = $httpResponse->getBody()->getContents();
            }
        }

        return $response;
    }
}