package openapisdk.models.operations;


public enum BooksVolumesAssociatedListAssociationEnum {
    ASSOCIATION_UNDEFINED("ASSOCIATION_UNDEFINED"),
    END_OF_SAMPLE("end-of-sample"),
    END_OF_VOLUME("end-of-volume"),
    RELATED_FOR_PLAY("related-for-play");

    public final String value;

    private BooksVolumesAssociatedListAssociationEnum(String value) {
        this.value = value;
    }
}
