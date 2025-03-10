/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class IssuesUpdateMilestoneRequestBody {
    /**
     * A description of the milestone.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public IssuesUpdateMilestoneRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("due_on")
    public OffsetDateTime dueOn;

    public IssuesUpdateMilestoneRequestBody withDueOn(OffsetDateTime dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    
    /**
     * The state of the milestone. Either `open` or `closed`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public IssuesUpdateMilestoneRequestBodyStateEnum state;

    public IssuesUpdateMilestoneRequestBody withState(IssuesUpdateMilestoneRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    
    /**
     * The title of the milestone.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public IssuesUpdateMilestoneRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public IssuesUpdateMilestoneRequestBody(){}
}
