package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseMaterialSet
 * A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
**/
public class CourseMaterialSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public CourseMaterial[] materials;
    public CourseMaterialSet withMaterials(CourseMaterial[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CourseMaterialSet withTitle(String title) {
        this.title = title;
        return this;
    }
}