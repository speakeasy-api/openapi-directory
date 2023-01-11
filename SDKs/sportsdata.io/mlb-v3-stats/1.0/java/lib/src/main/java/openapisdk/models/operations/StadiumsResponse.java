package openapisdk.models.operations;



public class StadiumsResponse {
    public String contentType;
    public StadiumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] stadiums;
    public StadiumsResponse withStadiums(Object[] stadiums) {
        this.stadiums = stadiums;
        return this;
    }
    public Long statusCode;
    public StadiumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}