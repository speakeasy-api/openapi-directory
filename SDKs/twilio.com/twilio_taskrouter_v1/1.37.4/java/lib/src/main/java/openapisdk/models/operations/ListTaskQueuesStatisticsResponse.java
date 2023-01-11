package openapisdk.models.operations;



public class ListTaskQueuesStatisticsResponse {
    public String contentType;
    public ListTaskQueuesStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse listTaskQueuesStatisticsResponse;
    public ListTaskQueuesStatisticsResponse withListTaskQueuesStatisticsResponse(ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse listTaskQueuesStatisticsResponse) {
        this.listTaskQueuesStatisticsResponse = listTaskQueuesStatisticsResponse;
        return this;
    }
    public Long statusCode;
    public ListTaskQueuesStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}