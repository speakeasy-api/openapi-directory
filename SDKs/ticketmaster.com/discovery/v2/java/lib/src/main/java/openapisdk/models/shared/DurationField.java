package openapisdk.models.shared;



public class DurationField {
    public String name;
    public DurationField withName(String name) {
        this.name = name;
        return this;
    }
    public Boolean precise;
    public DurationField withPrecise(Boolean precise) {
        this.precise = precise;
        return this;
    }
    public Boolean supported;
    public DurationField withSupported(Boolean supported) {
        this.supported = supported;
        return this;
    }
    public DurationFieldType type;
    public DurationField withType(DurationFieldType type) {
        this.type = type;
        return this;
    }
    public Long unitMillis;
    public DurationField withUnitMillis(Long unitMillis) {
        this.unitMillis = unitMillis;
        return this;
    }
}