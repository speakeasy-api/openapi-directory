package openapisdk.models.shared;



public class Timestamp {
    public Integer nanos;
    public Timestamp withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    public String seconds;
    public Timestamp withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}