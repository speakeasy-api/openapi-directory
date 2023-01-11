package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Media {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Media(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getResourcesMediaJson - Get MediaItems
     *
     * Media Items Listings
    **/
    public openapisdk.models.operations.GetResourcesMediaJsonResponse getResourcesMediaJson(openapisdk.models.operations.GetResourcesMediaJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaJsonResponse res = new openapisdk.models.operations.GetResourcesMediaJsonResponse() {{
            mediaItemWrappeds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItemWrapped[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItemWrapped[].class);
                res.mediaItemWrappeds = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaFeaturedJson - Get the list of featured content in the syndication system
     *
     * Get the list of featured content in the syndication system
    **/
    public openapisdk.models.operations.GetResourcesMediaFeaturedJsonResponse getResourcesMediaFeaturedJson(openapisdk.models.operations.GetResourcesMediaFeaturedJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/featured.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaFeaturedJsonResponse res = new openapisdk.models.operations.GetResourcesMediaFeaturedJsonResponse() {{
            mediaItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItem[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItem[].class);
                res.mediaItems = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
     *
     * Get the media with the highest ratings.
    **/
    public openapisdk.models.operations.GetResourcesMediaMostPopularMediaFormatResponse getResourcesMediaMostPopularMediaFormat(openapisdk.models.operations.GetResourcesMediaMostPopularMediaFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/mostPopularMedia.{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaMostPopularMediaFormatResponse res = new openapisdk.models.operations.GetResourcesMediaMostPopularMediaFormatResponse() {{
            mediaItemWrappeds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItemWrapped[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItemWrapped[].class);
                res.mediaItemWrappeds = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaSearchResultsJson - Get MediaItems by search query
     *
     * Full search
    **/
    public openapisdk.models.operations.GetResourcesMediaSearchResultsJsonResponse getResourcesMediaSearchResultsJson(openapisdk.models.operations.GetResourcesMediaSearchResultsJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/searchResults.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaSearchResultsJsonResponse res = new openapisdk.models.operations.GetResourcesMediaSearchResultsJsonResponse() {{
            mediaItemWrappeds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItemWrapped[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItemWrapped[].class);
                res.mediaItemWrappeds = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdJson - Get MediaItem by ID
     *
     * Information about a specific media item
    **/
    public openapisdk.models.operations.GetResourcesMediaIdJsonResponse getResourcesMediaIdJson(openapisdk.models.operations.GetResourcesMediaIdJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdJsonResponse res = new openapisdk.models.operations.GetResourcesMediaIdJsonResponse() {{
            mediaItemWrappeds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItemWrapped[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItemWrapped[].class);
                res.mediaItemWrappeds = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdContent - Get content for MediaItem
     *
     * The actual media content (html, image, etc...)
    **/
    public openapisdk.models.operations.GetResourcesMediaIdContentResponse getResourcesMediaIdContent(openapisdk.models.operations.GetResourcesMediaIdContentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/content", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdContentResponse res = new openapisdk.models.operations.GetResourcesMediaIdContentResponse() {{
            getResourcesMediaIdContent200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getResourcesMediaIdContent200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdEmbedJson - Get embed code for MediaItem
     *
     * Get the javascript or iframe embed code for this item (to embed it on a web page).
    **/
    public openapisdk.models.operations.GetResourcesMediaIdEmbedJsonResponse getResourcesMediaIdEmbedJson(openapisdk.models.operations.GetResourcesMediaIdEmbedJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/embed.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdEmbedJsonResponse res = new openapisdk.models.operations.GetResourcesMediaIdEmbedJsonResponse() {{
            getResourcesMediaIdEmbedJSON200ApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getResourcesMediaIdEmbedJSON200ApplicationJSONString = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdPreviewJpg - Get Tag by ID
     *
     * Get the jpg preview of the content item where applicable.
    **/
    public openapisdk.models.operations.GetResourcesMediaIdPreviewJpgResponse getResourcesMediaIdPreviewJpg(openapisdk.models.operations.GetResourcesMediaIdPreviewJpgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/preview.jpg", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdPreviewJpgResponse res = new openapisdk.models.operations.GetResourcesMediaIdPreviewJpgResponse() {{
            getResourcesMediaIdPreviewJpg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getResourcesMediaIdPreviewJpg200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdRelatedMediaFormat - Get related MediaItems by ID
     *
     * Get the media related to the current media item.
    **/
    public openapisdk.models.operations.GetResourcesMediaIdRelatedMediaFormatResponse getResourcesMediaIdRelatedMediaFormat(openapisdk.models.operations.GetResourcesMediaIdRelatedMediaFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/relatedMedia.{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdRelatedMediaFormatResponse res = new openapisdk.models.operations.GetResourcesMediaIdRelatedMediaFormatResponse() {{
            mediaItemWrappeds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaItemWrapped[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaItemWrapped[].class);
                res.mediaItemWrappeds = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdSyndicateFormat - Get syndicated content for MediaItem
     *
     * Get syndicated content.
    **/
    public openapisdk.models.operations.GetResourcesMediaIdSyndicateFormatResponse getResourcesMediaIdSyndicateFormat(openapisdk.models.operations.GetResourcesMediaIdSyndicateFormatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/syndicate.{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdSyndicateFormatResponse res = new openapisdk.models.operations.GetResourcesMediaIdSyndicateFormatResponse() {{
            syndicateMarshallerWrapped = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyndicateMarshallerWrapped out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyndicateMarshallerWrapped.class);
                res.syndicateMarshallerWrapped = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdThumbnailJpg - Get JPG thumbnail for MediaItem
     *
     * Get the jpg thumbnail of the content item where applicable.
    **/
    public openapisdk.models.operations.GetResourcesMediaIdThumbnailJpgResponse getResourcesMediaIdThumbnailJpg(openapisdk.models.operations.GetResourcesMediaIdThumbnailJpgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/thumbnail.jpg", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdThumbnailJpgResponse res = new openapisdk.models.operations.GetResourcesMediaIdThumbnailJpgResponse() {{
            getResourcesMediaIdThumbnailJpg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getResourcesMediaIdThumbnailJpg200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getResourcesMediaIdYoutubeMetaDataJson - Get Youtube metadata for MediaItem
     *
     * Youtube meta-data for a video item.
    **/
    public openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse getResourcesMediaIdYoutubeMetaDataJson(openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resources/media/{id}/youtubeMetaData.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse res = new openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJsonResponse() {{
            getResourcesMediaIdYoutubeMetaDataJSON200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson.class);
                res.getResourcesMediaIdYoutubeMetaDataJSON200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}