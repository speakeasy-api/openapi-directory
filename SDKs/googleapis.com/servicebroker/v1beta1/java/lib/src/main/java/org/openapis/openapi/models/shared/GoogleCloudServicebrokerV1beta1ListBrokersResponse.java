/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1ListBrokersResponse - The response for the `ListBrokers()` method.
 */
public class GoogleCloudServicebrokerV1beta1ListBrokersResponse {
    /**
     * The list of brokers in the container.
     */
    
    public GoogleCloudServicebrokerV1beta1Broker[] brokers;

    public GoogleCloudServicebrokerV1beta1ListBrokersResponse withBrokers(GoogleCloudServicebrokerV1beta1Broker[] brokers) {
        this.brokers = brokers;
        return this;
    }
    
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the `nextPageToken`
     * as a value for the query parameter `pageToken` in the next list request.
     * Subsequent list requests will have their own `nextPageToken` to continue
     * paging through the results
     */
    
    public String nextPageToken;

    public GoogleCloudServicebrokerV1beta1ListBrokersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    public GoogleCloudServicebrokerV1beta1ListBrokersResponse(){}
}
