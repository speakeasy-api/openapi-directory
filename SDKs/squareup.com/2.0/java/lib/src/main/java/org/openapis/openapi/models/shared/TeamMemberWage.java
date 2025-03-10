/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TeamMemberWage - The hourly wage rate that a team member earns on a `Shift` for doing the job
 * specified by the `title` property of this object.
 */
public class TeamMemberWage {
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourly_rate")
    public Money hourlyRate;

    public TeamMemberWage withHourlyRate(Money hourlyRate) {
        this.hourlyRate = hourlyRate;
        return this;
    }
    
    /**
     * The UUID for this object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public TeamMemberWage withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The `TeamMember` that this wage is assigned to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_member_id")
    public String teamMemberId;

    public TeamMemberWage withTeamMemberId(String teamMemberId) {
        this.teamMemberId = teamMemberId;
        return this;
    }
    
    /**
     * The job title that this wage relates to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public TeamMemberWage withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public TeamMemberWage(){}
}
