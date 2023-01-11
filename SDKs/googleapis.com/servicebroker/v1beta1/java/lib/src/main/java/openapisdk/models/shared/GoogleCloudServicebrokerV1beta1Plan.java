package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1Plan
 * Plan message describes a Service Plan.
**/
public class GoogleCloudServicebrokerV1beta1Plan {
    public Boolean bindable;
    public GoogleCloudServicebrokerV1beta1Plan withBindable(Boolean bindable) {
        this.bindable = bindable;
        return this;
    }
    public String description;
    public GoogleCloudServicebrokerV1beta1Plan withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean free;
    public GoogleCloudServicebrokerV1beta1Plan withFree(Boolean free) {
        this.free = free;
        return this;
    }
    public String id;
    public GoogleCloudServicebrokerV1beta1Plan withId(String id) {
        this.id = id;
        return this;
    }
    public java.util.Map<String, Object> metadata;
    public GoogleCloudServicebrokerV1beta1Plan withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    public String name;
    public GoogleCloudServicebrokerV1beta1Plan withName(String name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> schemas;
    public GoogleCloudServicebrokerV1beta1Plan withSchemas(java.util.Map<String, Object> schemas) {
        this.schemas = schemas;
        return this;
    }
}