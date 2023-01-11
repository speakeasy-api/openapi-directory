package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class ErrorResponse {
    public String code;
    public ErrorResponse withCode(String code) {
        this.code = code;
        return this;
    }
    public OffsetDateTime date;
    public ErrorResponse withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    public String message;
    public ErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}