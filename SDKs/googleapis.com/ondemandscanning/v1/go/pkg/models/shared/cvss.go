package shared

type CvssAttackComplexityEnum string

const (
	CVSSAttackComplexityEnumAttackComplexityUnspecified CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_UNSPECIFIED"
	CVSSAttackComplexityEnumAttackComplexityLow         CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_LOW"
	CVSSAttackComplexityEnumAttackComplexityHigh        CvssAttackComplexityEnum = "ATTACK_COMPLEXITY_HIGH"
)

type CvssAttackVectorEnum string

const (
	CVSSAttackVectorEnumAttackVectorUnspecified CvssAttackVectorEnum = "ATTACK_VECTOR_UNSPECIFIED"
	CVSSAttackVectorEnumAttackVectorNetwork     CvssAttackVectorEnum = "ATTACK_VECTOR_NETWORK"
	CVSSAttackVectorEnumAttackVectorAdjacent    CvssAttackVectorEnum = "ATTACK_VECTOR_ADJACENT"
	CVSSAttackVectorEnumAttackVectorLocal       CvssAttackVectorEnum = "ATTACK_VECTOR_LOCAL"
	CVSSAttackVectorEnumAttackVectorPhysical    CvssAttackVectorEnum = "ATTACK_VECTOR_PHYSICAL"
)

type CvssAuthenticationEnum string

const (
	CVSSAuthenticationEnumAuthenticationUnspecified CvssAuthenticationEnum = "AUTHENTICATION_UNSPECIFIED"
	CVSSAuthenticationEnumAuthenticationMultiple    CvssAuthenticationEnum = "AUTHENTICATION_MULTIPLE"
	CVSSAuthenticationEnumAuthenticationSingle      CvssAuthenticationEnum = "AUTHENTICATION_SINGLE"
	CVSSAuthenticationEnumAuthenticationNone        CvssAuthenticationEnum = "AUTHENTICATION_NONE"
)

type CvssAvailabilityImpactEnum string

const (
	CVSSAvailabilityImpactEnumImpactUnspecified CvssAvailabilityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSAvailabilityImpactEnumImpactHigh        CvssAvailabilityImpactEnum = "IMPACT_HIGH"
	CVSSAvailabilityImpactEnumImpactLow         CvssAvailabilityImpactEnum = "IMPACT_LOW"
	CVSSAvailabilityImpactEnumImpactNone        CvssAvailabilityImpactEnum = "IMPACT_NONE"
)

type CvssConfidentialityImpactEnum string

const (
	CVSSConfidentialityImpactEnumImpactUnspecified CvssConfidentialityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSConfidentialityImpactEnumImpactHigh        CvssConfidentialityImpactEnum = "IMPACT_HIGH"
	CVSSConfidentialityImpactEnumImpactLow         CvssConfidentialityImpactEnum = "IMPACT_LOW"
	CVSSConfidentialityImpactEnumImpactNone        CvssConfidentialityImpactEnum = "IMPACT_NONE"
)

type CvssIntegrityImpactEnum string

const (
	CVSSIntegrityImpactEnumImpactUnspecified CvssIntegrityImpactEnum = "IMPACT_UNSPECIFIED"
	CVSSIntegrityImpactEnumImpactHigh        CvssIntegrityImpactEnum = "IMPACT_HIGH"
	CVSSIntegrityImpactEnumImpactLow         CvssIntegrityImpactEnum = "IMPACT_LOW"
	CVSSIntegrityImpactEnumImpactNone        CvssIntegrityImpactEnum = "IMPACT_NONE"
)

type CvssPrivilegesRequiredEnum string

const (
	CVSSPrivilegesRequiredEnumPrivilegesRequiredUnspecified CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_UNSPECIFIED"
	CVSSPrivilegesRequiredEnumPrivilegesRequiredNone        CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_NONE"
	CVSSPrivilegesRequiredEnumPrivilegesRequiredLow         CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_LOW"
	CVSSPrivilegesRequiredEnumPrivilegesRequiredHigh        CvssPrivilegesRequiredEnum = "PRIVILEGES_REQUIRED_HIGH"
)

type CvssScopeEnum string

const (
	CVSSScopeEnumScopeUnspecified CvssScopeEnum = "SCOPE_UNSPECIFIED"
	CVSSScopeEnumScopeUnchanged   CvssScopeEnum = "SCOPE_UNCHANGED"
	CVSSScopeEnumScopeChanged     CvssScopeEnum = "SCOPE_CHANGED"
)

type CvssUserInteractionEnum string

const (
	CVSSUserInteractionEnumUserInteractionUnspecified CvssUserInteractionEnum = "USER_INTERACTION_UNSPECIFIED"
	CVSSUserInteractionEnumUserInteractionNone        CvssUserInteractionEnum = "USER_INTERACTION_NONE"
	CVSSUserInteractionEnumUserInteractionRequired    CvssUserInteractionEnum = "USER_INTERACTION_REQUIRED"
)

// Cvss
// Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
type Cvss struct {
	AttackComplexity      *CvssAttackComplexityEnum      `json:"attackComplexity,omitempty"`
	AttackVector          *CvssAttackVectorEnum          `json:"attackVector,omitempty"`
	Authentication        *CvssAuthenticationEnum        `json:"authentication,omitempty"`
	AvailabilityImpact    *CvssAvailabilityImpactEnum    `json:"availabilityImpact,omitempty"`
	BaseScore             *float32                       `json:"baseScore,omitempty"`
	ConfidentialityImpact *CvssConfidentialityImpactEnum `json:"confidentialityImpact,omitempty"`
	ExploitabilityScore   *float32                       `json:"exploitabilityScore,omitempty"`
	ImpactScore           *float32                       `json:"impactScore,omitempty"`
	IntegrityImpact       *CvssIntegrityImpactEnum       `json:"integrityImpact,omitempty"`
	PrivilegesRequired    *CvssPrivilegesRequiredEnum    `json:"privilegesRequired,omitempty"`
	Scope                 *CvssScopeEnum                 `json:"scope,omitempty"`
	UserInteraction       *CvssUserInteractionEnum       `json:"userInteraction,omitempty"`
}
