package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Tag
 * Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
 * 
**/
public class Tag {
    @JsonProperty("name")
    public String name;
    public Tag withName(String name) {
        this.name = name;
        return this;
    }
}