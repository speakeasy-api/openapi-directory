package shared

type RepertoirEcreaterequestRepertoireEditEnum string

const (
	REPERTOIREcreaterequestRepertoireEditEnumCreate RepertoirEcreaterequestRepertoireEditEnum = "create"
)

type RepertoirEcreaterequest struct {
	Keyid          string                                    `json:"keyid"`
	RepertoireEdit RepertoirEcreaterequestRepertoireEditEnum `json:"repertoireEdit"`
	RepertoireNom  string                                    `json:"repertoireNom"`
}
