package openapisdk.models.operations;

import java.time.LocalDate;

public class GetTargetsTargetIdScansDatesResponse {
    public String contentType;
    public GetTargetsTargetIdScansDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdScansDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LocalDate[] getTargetsTargetIdScansDates200ApplicationJSONDateStrings;
    public GetTargetsTargetIdScansDatesResponse withGetTargetsTargetIdScansDates200ApplicationJsonDateStrings(LocalDate[] getTargetsTargetIdScansDates200ApplicationJSONDateStrings) {
        this.getTargetsTargetIdScansDates200ApplicationJSONDateStrings = getTargetsTargetIdScansDates200ApplicationJSONDateStrings;
        return this;
    }
    public GetTargetsTargetIdScansDates401ApplicationJson getTargetsTargetIdScansDates401ApplicationJSONObject;
    public GetTargetsTargetIdScansDatesResponse withGetTargetsTargetIdScansDates401ApplicationJsonObject(GetTargetsTargetIdScansDates401ApplicationJson getTargetsTargetIdScansDates401ApplicationJSONObject) {
        this.getTargetsTargetIdScansDates401ApplicationJSONObject = getTargetsTargetIdScansDates401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdScansDates404ApplicationJson getTargetsTargetIdScansDates404ApplicationJSONObject;
    public GetTargetsTargetIdScansDatesResponse withGetTargetsTargetIdScansDates404ApplicationJsonObject(GetTargetsTargetIdScansDates404ApplicationJson getTargetsTargetIdScansDates404ApplicationJSONObject) {
        this.getTargetsTargetIdScansDates404ApplicationJSONObject = getTargetsTargetIdScansDates404ApplicationJSONObject;
        return this;
    }
}