package openapisdk.models.operations;



public class BooksLayersAnnotationDataGetResponse {
    public String contentType;
    public BooksLayersAnnotationDataGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DictionaryAnnotationdata dictionaryAnnotationdata;
    public BooksLayersAnnotationDataGetResponse withDictionaryAnnotationdata(openapisdk.models.shared.DictionaryAnnotationdata dictionaryAnnotationdata) {
        this.dictionaryAnnotationdata = dictionaryAnnotationdata;
        return this;
    }
    public Long statusCode;
    public BooksLayersAnnotationDataGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}