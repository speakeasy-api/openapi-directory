package openapisdk.models.shared;


public enum PollFieldsParameterEnum {
    ID("id"),
    OPTIONS("options"),
    VOTING_STATUS("voting_status"),
    END_DATETIME("end_datetime"),
    DURATION_MINUTES("duration_minutes");

    public final String value;

    private PollFieldsParameterEnum(String value) {
        this.value = value;
    }
}
