package openapisdk.models.shared;



public class DateTimeField {
    public DurationField durationField;
    public DateTimeField withDurationField(DurationField durationField) {
        this.durationField = durationField;
        return this;
    }
    public DurationField leapDurationField;
    public DateTimeField withLeapDurationField(DurationField leapDurationField) {
        this.leapDurationField = leapDurationField;
        return this;
    }
    public Boolean lenient;
    public DateTimeField withLenient(Boolean lenient) {
        this.lenient = lenient;
        return this;
    }
    public Integer maximumValue;
    public DateTimeField withMaximumValue(Integer maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    }
    public Integer minimumValue;
    public DateTimeField withMinimumValue(Integer minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    }
    public String name;
    public DateTimeField withName(String name) {
        this.name = name;
        return this;
    }
    public DurationField rangeDurationField;
    public DateTimeField withRangeDurationField(DurationField rangeDurationField) {
        this.rangeDurationField = rangeDurationField;
        return this;
    }
    public Boolean supported;
    public DateTimeField withSupported(Boolean supported) {
        this.supported = supported;
        return this;
    }
    public DateTimeFieldType type;
    public DateTimeField withType(DateTimeFieldType type) {
        this.type = type;
        return this;
    }
}