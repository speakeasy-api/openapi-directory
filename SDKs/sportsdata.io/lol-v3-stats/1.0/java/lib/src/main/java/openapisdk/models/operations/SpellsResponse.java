package openapisdk.models.operations;



public class SpellsResponse {
    public String contentType;
    public SpellsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] spells;
    public SpellsResponse withSpells(Object[] spells) {
        this.spells = spells;
        return this;
    }
    public Long statusCode;
    public SpellsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}