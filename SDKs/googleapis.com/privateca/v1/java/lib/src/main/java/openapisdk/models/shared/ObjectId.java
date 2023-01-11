package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectId
 * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
**/
public class ObjectId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectIdPath")
    public Integer[] objectIdPath;
    public ObjectId withObjectIdPath(Integer[] objectIdPath) {
        this.objectIdPath = objectIdPath;
        return this;
    }
}