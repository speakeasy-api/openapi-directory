package openapisdk.models.shared;



/**
 * Classification
 * Classification
**/
public class Classification {
    public Level genre;
    public Classification withGenre(Level genre) {
        this.genre = genre;
        return this;
    }
    public Boolean primary;
    public Classification withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    public Segment segment;
    public Classification withSegment(Segment segment) {
        this.segment = segment;
        return this;
    }
    public Level subGenre;
    public Classification withSubGenre(Level subGenre) {
        this.subGenre = subGenre;
        return this;
    }
    public Level subType;
    public Classification withSubType(Level subType) {
        this.subType = subType;
        return this;
    }
    public Level type;
    public Classification withType(Level type) {
        this.type = type;
        return this;
    }
}