package openapisdk.models.shared;



public class DateTimeFieldType {
    public DurationFieldType durationType;
    public DateTimeFieldType withDurationType(DurationFieldType durationType) {
        this.durationType = durationType;
        return this;
    }
    public String name;
    public DateTimeFieldType withName(String name) {
        this.name = name;
        return this;
    }
    public DurationFieldType rangeDurationType;
    public DateTimeFieldType withRangeDurationType(DurationFieldType rangeDurationType) {
        this.rangeDurationType = rangeDurationType;
        return this;
    }
}