package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordCrmEntry
 * Class for Landlord CRM Entries
**/
public class LandlordCrmEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchID")
    public String branchID;
    public LandlordCrmEntry withBranchId(String branchID) {
        this.branchID = branchID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalReference")
    public String globalReference;
    public LandlordCrmEntry withGlobalReference(String globalReference) {
        this.globalReference = globalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LandlordCrmEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OID")
    public String oid;
    public LandlordCrmEntry withOid(String oid) {
        this.oid = oid;
        return this;
    }
}