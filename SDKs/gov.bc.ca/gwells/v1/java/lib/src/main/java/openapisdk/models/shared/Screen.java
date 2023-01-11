package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Screen {
    @JsonProperty("assembly_type")
    public String assemblyType;
    public Screen withAssemblyType(String assemblyType) {
        this.assemblyType = assemblyType;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public Screen withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_diameter")
    public String internalDiameter;
    public Screen withInternalDiameter(String internalDiameter) {
        this.internalDiameter = internalDiameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slot_size")
    public String slotSize;
    public Screen withSlotSize(String slotSize) {
        this.slotSize = slotSize;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public Screen withStart(String start) {
        this.start = start;
        return this;
    }
}