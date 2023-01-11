package openapisdk.models.shared;



public class Pathway {
    public String description;
    public Pathway withDescription(String description) {
        this.description = description;
        return this;
    }
    public String hasAlteredPath;
    public Pathway withHasAlteredPath(String hasAlteredPath) {
        this.hasAlteredPath = hasAlteredPath;
        return this;
    }
    public String id;
    public Pathway withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public Pathway withName(String name) {
        this.name = name;
        return this;
    }
    public PathwayObject[] objectList;
    public Pathway withObjectList(PathwayObject[] objectList) {
        this.objectList = objectList;
        return this;
    }
    public String[] pathwayCategories;
    public Pathway withPathwayCategories(String[] pathwayCategories) {
        this.pathwayCategories = pathwayCategories;
        return this;
    }
    public Reference[] referenceList;
    public Pathway withReferenceList(Reference[] referenceList) {
        this.referenceList = referenceList;
        return this;
    }
}