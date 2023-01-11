package openapisdk.models.operations;



public class PostApiPdfWkhtmltopdfResponse {
    public String contentType;
    public PostApiPdfWkhtmltopdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseDto errorResponseDto;
    public PostApiPdfWkhtmltopdfResponse withErrorResponseDto(openapisdk.models.shared.ErrorResponseDto errorResponseDto) {
        this.errorResponseDto = errorResponseDto;
        return this;
    }
    public openapisdk.models.shared.PdfResponseDto pdfResponseDto;
    public PostApiPdfWkhtmltopdfResponse withPdfResponseDto(openapisdk.models.shared.PdfResponseDto pdfResponseDto) {
        this.pdfResponseDto = pdfResponseDto;
        return this;
    }
    public Long statusCode;
    public PostApiPdfWkhtmltopdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] postApiPdfWkhtmltopdf200ApplicationPdfBinaryString;
    public PostApiPdfWkhtmltopdfResponse withPostApiPdfWkhtmltopdf200ApplicationPdfBinaryString(byte[] postApiPdfWkhtmltopdf200ApplicationPdfBinaryString) {
        this.postApiPdfWkhtmltopdf200ApplicationPdfBinaryString = postApiPdfWkhtmltopdf200ApplicationPdfBinaryString;
        return this;
    }
}