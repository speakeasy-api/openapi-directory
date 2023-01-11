package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Casing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casing_code")
    public String casingCode;
    public Casing withCasingCode(String casingCode) {
        this.casingCode = casingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casing_material")
    public String casingMaterial;
    public Casing withCasingMaterial(String casingMaterial) {
        this.casingMaterial = casingMaterial;
        return this;
    }
    @JsonProperty("diameter")
    public String diameter;
    public Casing withDiameter(String diameter) {
        this.diameter = diameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_shoe")
    public Boolean driveShoe;
    public Casing withDriveShoe(Boolean driveShoe) {
        this.driveShoe = driveShoe;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public Casing withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public Casing withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wall_thickness")
    public String wallThickness;
    public Casing withWallThickness(String wallThickness) {
        this.wallThickness = wallThickness;
        return this;
    }
}