package openapisdk.models.shared;


public enum NodeInheritedPropertiesPropertiesProviderEnum {
    INHERITED("inherited"),
    OVERRIDDEN("overridden"),
    PLUGIN_NAME_LIKE_DATASOURCES("plugin name like datasources");

    public final String value;

    private NodeInheritedPropertiesPropertiesProviderEnum(String value) {
        this.value = value;
    }
}
