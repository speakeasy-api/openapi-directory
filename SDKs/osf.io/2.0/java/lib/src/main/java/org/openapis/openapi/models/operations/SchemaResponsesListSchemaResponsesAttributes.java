/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;



/**
 * SchemaResponsesListSchemaResponsesAttributes - The properties of the Schema Response.
 */
public class SchemaResponsesListSchemaResponsesAttributes {
    /**
     * The date the Schema Response was created
     */
    
    public Long dateCreated;

    public SchemaResponsesListSchemaResponsesAttributes withDateCreated(Long dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    
    /**
     * The date the Schema Response was most recently changed.
     */
    
    public Long dateModified;

    public SchemaResponsesListSchemaResponsesAttributes withDateModified(Long dateModified) {
        this.dateModified = dateModified;
        return this;
    }
    
    /**
     * The date the Schema Response was submitted for approval.
     */
    
    public Long dateSubmitted;

    public SchemaResponsesListSchemaResponsesAttributes withDateSubmitted(Long dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
        return this;
    }
    
    /**
     * A bool that represents whether the Schema Response is the original one that was made when the registration was created.
     */
    
    public Boolean isOriginalResponse;

    public SchemaResponsesListSchemaResponsesAttributes withIsOriginalResponse(Boolean isOriginalResponse) {
        this.isOriginalResponse = isOriginalResponse;
        return this;
    }
    
    /**
     * A bool that represents whether the Schema Response needs the current user to approve the state transition.
     */
    
    public Boolean isPendingCurrentUserApproval;

    public SchemaResponsesListSchemaResponsesAttributes withIsPendingCurrentUserApproval(Boolean isPendingCurrentUserApproval) {
        this.isPendingCurrentUserApproval = isPendingCurrentUserApproval;
        return this;
    }
    
    /**
     * A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.
     */
    
    public SchemaResponsesListSchemaResponsesAttributesReviewsStateEnum reviewsState;

    public SchemaResponsesListSchemaResponsesAttributes withReviewsState(SchemaResponsesListSchemaResponsesAttributesReviewsStateEnum reviewsState) {
        this.reviewsState = reviewsState;
        return this;
    }
    
    /**
     * A user provided string representing the reason a new Schema Response was needed.
     */
    
    public String revisionJustification;

    public SchemaResponsesListSchemaResponsesAttributes withRevisionJustification(String revisionJustification) {
        this.revisionJustification = revisionJustification;
        return this;
    }
    
    /**
     * A dictionary object representing responses to to the revision where the key is the block key for that the response. For example in the registration response `{"q1": "Answer 1"}` the block key is `q1`..
     */
    
    public java.util.Map<String, Object> revisionResponses;

    public SchemaResponsesListSchemaResponsesAttributes withRevisionResponses(java.util.Map<String, Object> revisionResponses) {
        this.revisionResponses = revisionResponses;
        return this;
    }
    
    /**
     * A list of strings which the response keys for Registration Response Blocks that were updated from the previous schema.
     */
    
    public Object[] updatedResponseKeys;

    public SchemaResponsesListSchemaResponsesAttributes withUpdatedResponseKeys(Object[] updatedResponseKeys) {
        this.updatedResponseKeys = updatedResponseKeys;
        return this;
    }
    
    public SchemaResponsesListSchemaResponsesAttributes(){}
}
