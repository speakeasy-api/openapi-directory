package openapisdk.models.operations;


public enum PostServersCreateServerResponseServerImageOsFlavorEnum {
    UBUNTU("ubuntu"),
    CENTOS("centos"),
    DEBIAN("debian"),
    FEDORA("fedora"),
    UNKNOWN("unknown");

    public final String value;

    private PostServersCreateServerResponseServerImageOsFlavorEnum(String value) {
        this.value = value;
    }
}
