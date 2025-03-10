/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReplicaStatus - Describes the status of a user-managed replica for the SecretVersion.
 */
public class ReplicaStatus {
    /**
     * Describes the status of customer-managed encryption.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryption")
    public CustomerManagedEncryptionStatus customerManagedEncryption;

    public ReplicaStatus withCustomerManagedEncryption(CustomerManagedEncryptionStatus customerManagedEncryption) {
        this.customerManagedEncryption = customerManagedEncryption;
        return this;
    }
    
    /**
     * Output only. The canonical ID of the replica location. For example: `"us-east1"`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;

    public ReplicaStatus withLocation(String location) {
        this.location = location;
        return this;
    }
    
    public ReplicaStatus(){}
}
