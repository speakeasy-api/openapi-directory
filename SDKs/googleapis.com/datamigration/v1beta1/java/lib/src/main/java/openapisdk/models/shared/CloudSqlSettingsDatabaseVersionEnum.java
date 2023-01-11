package openapisdk.models.shared;


public enum CloudSqlSettingsDatabaseVersionEnum {
    SQL_DATABASE_VERSION_UNSPECIFIED("SQL_DATABASE_VERSION_UNSPECIFIED"),
    MYSQL56("MYSQL_5_6"),
    MYSQL57("MYSQL_5_7"),
    MYSQL80("MYSQL_8_0");

    public final String value;

    private CloudSqlSettingsDatabaseVersionEnum(String value) {
        this.value = value;
    }
}
