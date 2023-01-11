package openapisdk.models.shared;



public class Detections {
    public Float confidence;
    public Detections withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    public String language;
    public Detections withLanguage(String language) {
        this.language = language;
        return this;
    }
}