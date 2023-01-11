package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResource
 * The `references` entries describe bibliographic references.
 * 
 * The following properties are used to provide the bibliographic details:
 * 
 * - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
 * - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
 * - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
 *     - **name**: Full name of the person, REQUIRED.
 *     - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
 * - **doi** and **url**: values are strings.
 * - **Requirements/Conventions**:
 *     - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
 *     - **Query**: Support for queries on any of these properties is OPTIONAL.
 *         If supported, filters MAY support only a subset of comparison operators.
 *     - Every references entry MUST contain at least one of the properties.
**/
public class ReferenceResource {
    @JsonProperty("attributes")
    public ReferenceResourceAttributes attributes;
    public ReferenceResource withAttributes(ReferenceResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ReferenceResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReferenceResourceResourceLinks links;
    public ReferenceResource withLinks(ReferenceResourceResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public ReferenceResource withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public ReferenceResourceEntryRelationships relationships;
    public ReferenceResource withRelationships(ReferenceResourceEntryRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ReferenceResource withType(String type) {
        this.type = type;
        return this;
    }
}