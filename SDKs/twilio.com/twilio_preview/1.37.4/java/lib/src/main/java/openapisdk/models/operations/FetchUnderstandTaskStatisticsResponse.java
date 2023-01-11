package openapisdk.models.operations;



public class FetchUnderstandTaskStatisticsResponse {
    public String contentType;
    public FetchUnderstandTaskStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUnderstandTaskStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskStatistics previewUnderstandAssistantTaskTaskStatistics;
    public FetchUnderstandTaskStatisticsResponse withPreviewUnderstandAssistantTaskTaskStatistics(openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskStatistics previewUnderstandAssistantTaskTaskStatistics) {
        this.previewUnderstandAssistantTaskTaskStatistics = previewUnderstandAssistantTaskTaskStatistics;
        return this;
    }
}