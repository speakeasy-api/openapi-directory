package shared

type CvsSv3AttackComplexityEnum string

const (
	CVSSv3AttackComplexityEnumAttackComplexityUnspecified CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	CVSSv3AttackComplexityEnumAttackComplexityLow         CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	CVSSv3AttackComplexityEnumAttackComplexityHigh        CvsSv3AttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
)

type CvsSv3AttackVectorEnum string

const (
	CVSSv3AttackVectorEnumAttackVectorUnspecified CvsSv3AttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	CVSSv3AttackVectorEnumAttackVectorNetwork     CvsSv3AttackVectorEnum = "ATTACK_VECTOR_NETWORK"
	CVSSv3AttackVectorEnumAttackVectorAdjacent    CvsSv3AttackVectorEnum = "ATTACK_VECTOR_ADJACENT"
	CVSSv3AttackVectorEnumAttackVectorLocal       CvsSv3AttackVectorEnum = "ATTACK_VECTOR_LOCAL"
	CVSSv3AttackVectorEnumAttackVectorPhysical    CvsSv3AttackVectorEnum = "ATTACK_VECTOR_PHYSICAL"
)

type CvsSv3AvailabilityImpactEnum string

const (
	CVSSv3AvailabilityImpactEnumImpactUnspecified CvsSv3AvailabilityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSv3AvailabilityImpactEnumImpactHigh        CvsSv3AvailabilityImpactEnum = "IMPACT_HIGH"
	CVSSv3AvailabilityImpactEnumImpactLow         CvsSv3AvailabilityImpactEnum = "IMPACT_LOW"
	CVSSv3AvailabilityImpactEnumImpactNone        CvsSv3AvailabilityImpactEnum = "IMPACT_NONE"
)

type CvsSv3ConfidentialityImpactEnum string

const (
	CVSSv3ConfidentialityImpactEnumImpactUnspecified CvsSv3ConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSv3ConfidentialityImpactEnumImpactHigh        CvsSv3ConfidentialityImpactEnum = "IMPACT_HIGH"
	CVSSv3ConfidentialityImpactEnumImpactLow         CvsSv3ConfidentialityImpactEnum = "IMPACT_LOW"
	CVSSv3ConfidentialityImpactEnumImpactNone        CvsSv3ConfidentialityImpactEnum = "IMPACT_NONE"
)

type CvsSv3IntegrityImpactEnum string

const (
	CVSSv3IntegrityImpactEnumImpactUnspecified CvsSv3IntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSv3IntegrityImpactEnumImpactHigh        CvsSv3IntegrityImpactEnum = "IMPACT_HIGH"
	CVSSv3IntegrityImpactEnumImpactLow         CvsSv3IntegrityImpactEnum = "IMPACT_LOW"
	CVSSv3IntegrityImpactEnumImpactNone        CvsSv3IntegrityImpactEnum = "IMPACT_NONE"
)

type CvsSv3PrivilegesRequiredEnum string

const (
	CVSSv3PrivilegesRequiredEnumPrivilegesRequiredUnspecified CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_UNSPECIFIED"
	CVSSv3PrivilegesRequiredEnumPrivilegesRequiredNone        CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_NONE"
	CVSSv3PrivilegesRequiredEnumPrivilegesRequiredLow         CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_LOW"
	CVSSv3PrivilegesRequiredEnumPrivilegesRequiredHigh        CvsSv3PrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_HIGH"
)

type CvsSv3ScopeEnum string

const (
	CVSSv3ScopeEnumScopeUnspecified CvsSv3ScopeEnum = "SCOPE_UNSPECIFIED"
	CVSSv3ScopeEnumScopeUnchanged   CvsSv3ScopeEnum = "SCOPE_UNCHANGED"
	CVSSv3ScopeEnumScopeChanged     CvsSv3ScopeEnum = "SCOPE_CHANGED"
)

type CvsSv3UserInteractionEnum string

const (
	CVSSv3UserInteractionEnumUserInteractionUnspecified CvsSv3UserInteractionEnum = "USER_INTERACTION_UNSPECIFIED"
	CVSSv3UserInteractionEnumUserInteractionNone        CvsSv3UserInteractionEnum = "USER_INTERACTION_NONE"
	CVSSv3UserInteractionEnumUserInteractionRequired    CvsSv3UserInteractionEnum = "USER_INTERACTION_REQUIRED"
)

// CvsSv3
// Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
type CvsSv3 struct {
	AttackComplexity      *CvsSv3AttackComplexityEnum      `json:"attackComplexity,omitempty"`
	AttackVector          *CvsSv3AttackVectorEnum          `json:"attackVector,omitempty"`
	AvailabilityImpact    *CvsSv3AvailabilityImpactEnum    `json:"availabilityImpact,omitempty"`
	BaseScore             *float32                         `json:"baseScore,omitempty"`
	ConfidentialityImpact *CvsSv3ConfidentialityImpactEnum `json:"confidentialityImpact,omitempty"`
	ExploitabilityScore   *float32                         `json:"exploitabilityScore,omitempty"`
	ImpactScore           *float32                         `json:"impactScore,omitempty"`
	IntegrityImpact       *CvsSv3IntegrityImpactEnum       `json:"integrityImpact,omitempty"`
	PrivilegesRequired    *CvsSv3PrivilegesRequiredEnum    `json:"privilegesRequired,omitempty"`
	Scope                 *CvsSv3ScopeEnum                 `json:"scope,omitempty"`
	UserInteraction       *CvsSv3UserInteractionEnum       `json:"userInteraction,omitempty"`
}
