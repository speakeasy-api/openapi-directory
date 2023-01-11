package openapisdk.models.operations;



public class NotebooksProjectsLocationsSchedulesGetResponse {
    public String contentType;
    public NotebooksProjectsLocationsSchedulesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Schedule schedule;
    public NotebooksProjectsLocationsSchedulesGetResponse withSchedule(openapisdk.models.shared.Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsSchedulesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}