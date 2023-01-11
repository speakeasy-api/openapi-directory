package openapisdk.models.shared;


public enum ClipEffectEnum {
    ZOOM_IN("zoomIn"),
    ZOOM_OUT("zoomOut"),
    SLIDE_LEFT("slideLeft"),
    SLIDE_RIGHT("slideRight"),
    SLIDE_UP("slideUp"),
    SLIDE_DOWN("slideDown");

    public final String value;

    private ClipEffectEnum(String value) {
        this.value = value;
    }
}
