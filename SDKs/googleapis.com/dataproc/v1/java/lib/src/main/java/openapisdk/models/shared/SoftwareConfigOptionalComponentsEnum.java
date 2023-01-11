package openapisdk.models.shared;


public enum SoftwareConfigOptionalComponentsEnum {
    COMPONENT_UNSPECIFIED("COMPONENT_UNSPECIFIED"),
    ANACONDA("ANACONDA"),
    DOCKER("DOCKER"),
    DRUID("DRUID"),
    FLINK("FLINK"),
    HBASE("HBASE"),
    HIVE_WEBHCAT("HIVE_WEBHCAT"),
    JUPYTER("JUPYTER"),
    PRESTO("PRESTO"),
    TRINO("TRINO"),
    RANGER("RANGER"),
    SOLR("SOLR"),
    ZEPPELIN("ZEPPELIN"),
    ZOOKEEPER("ZOOKEEPER");

    public final String value;

    private SoftwareConfigOptionalComponentsEnum(String value) {
        this.value = value;
    }
}
