package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Guardian
 * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
**/
public class Guardian {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guardianId")
    public String guardianId;
    public Guardian withGuardianId(String guardianId) {
        this.guardianId = guardianId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guardianProfile")
    public UserProfile guardianProfile;
    public Guardian withGuardianProfile(UserProfile guardianProfile) {
        this.guardianProfile = guardianProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitedEmailAddress")
    public String invitedEmailAddress;
    public Guardian withInvitedEmailAddress(String invitedEmailAddress) {
        this.invitedEmailAddress = invitedEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentId")
    public String studentId;
    public Guardian withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}