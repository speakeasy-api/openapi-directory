package openapisdk.models.shared;



/**
 * Outlet
 * A selling point for tickets.
**/
public class Outlet {
    public String type;
    public Outlet withType(String type) {
        this.type = type;
        return this;
    }
    public String url;
    public Outlet withUrl(String url) {
        this.url = url;
        return this;
    }
}