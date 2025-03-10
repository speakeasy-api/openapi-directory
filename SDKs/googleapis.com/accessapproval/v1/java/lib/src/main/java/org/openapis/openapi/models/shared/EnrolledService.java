/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnrolledService - Represents the enrollment of a cloud resource into a specific service.
 */
public class EnrolledService {
    /**
     * The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudProduct")
    public String cloudProduct;

    public EnrolledService withCloudProduct(String cloudProduct) {
        this.cloudProduct = cloudProduct;
        return this;
    }
    
    /**
     * The enrollment level of the service.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentLevel")
    public EnrolledServiceEnrollmentLevelEnum enrollmentLevel;

    public EnrolledService withEnrollmentLevel(EnrolledServiceEnrollmentLevelEnum enrollmentLevel) {
        this.enrollmentLevel = enrollmentLevel;
        return this;
    }
    
    public EnrolledService(){}
}
