package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MitreAttack
 * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
**/
public class MitreAttack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalTactics")
    public MitreAttackAdditionalTacticsEnum[] additionalTactics;
    public MitreAttack withAdditionalTactics(MitreAttackAdditionalTacticsEnum[] additionalTactics) {
        this.additionalTactics = additionalTactics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalTechniques")
    public MitreAttackAdditionalTechniquesEnum[] additionalTechniques;
    public MitreAttack withAdditionalTechniques(MitreAttackAdditionalTechniquesEnum[] additionalTechniques) {
        this.additionalTechniques = additionalTechniques;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryTactic")
    public MitreAttackPrimaryTacticEnum primaryTactic;
    public MitreAttack withPrimaryTactic(MitreAttackPrimaryTacticEnum primaryTactic) {
        this.primaryTactic = primaryTactic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryTechniques")
    public MitreAttackPrimaryTechniquesEnum[] primaryTechniques;
    public MitreAttack withPrimaryTechniques(MitreAttackPrimaryTechniquesEnum[] primaryTechniques) {
        this.primaryTechniques = primaryTechniques;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public MitreAttack withVersion(String version) {
        this.version = version;
        return this;
    }
}