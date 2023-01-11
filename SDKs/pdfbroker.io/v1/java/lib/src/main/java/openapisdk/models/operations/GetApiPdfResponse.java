package openapisdk.models.operations;



public class GetApiPdfResponse {
    public String contentType;
    public GetApiPdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseDto errorResponseDto;
    public GetApiPdfResponse withErrorResponseDto(openapisdk.models.shared.ErrorResponseDto errorResponseDto) {
        this.errorResponseDto = errorResponseDto;
        return this;
    }
    public Long statusCode;
    public GetApiPdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}