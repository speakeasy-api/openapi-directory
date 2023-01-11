package openapisdk.models.shared;



/**
 * Genre
 * Secondary Genre
**/
public class Genre {
    public String id;
    public Genre withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public Genre withName(String name) {
        this.name = name;
        return this;
    }
}