package openapisdk.models.shared;



/**
 * Product
 * Product
**/
public class Product {
    public String id;
    public Product withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public Product withName(String name) {
        this.name = name;
        return this;
    }
    public String type;
    public Product withType(String type) {
        this.type = type;
        return this;
    }
    public String url;
    public Product withUrl(String url) {
        this.url = url;
        return this;
    }
}