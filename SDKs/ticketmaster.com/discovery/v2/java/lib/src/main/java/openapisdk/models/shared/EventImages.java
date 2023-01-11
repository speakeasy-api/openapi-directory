package openapisdk.models.shared;



/**
 * EventImages
 * This class defines an Event with only images view on the Discovery API
**/
public class EventImages {
    public String id;
    public EventImages withId(String id) {
        this.id = id;
        return this;
    }
    public Image[] images;
    public EventImages withImages(Image[] images) {
        this.images = images;
        return this;
    }
    public EventImagesTypeEnum type;
    public EventImages withType(EventImagesTypeEnum type) {
        this.type = type;
        return this;
    }
}