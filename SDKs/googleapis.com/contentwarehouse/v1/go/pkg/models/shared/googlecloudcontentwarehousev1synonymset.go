package shared

// GoogleCloudContentwarehouseV1SynonymSet
// Represents a list of synonyms for a given context. For example a context "sales" could contain: Synonym 1: sale, invoice, bill, order Synonym 2: money, credit, finance, payment Synonym 3: shipping, freight, transport Each SynonymSets should be disjoint
type GoogleCloudContentwarehouseV1SynonymSet struct {
	Context  *string                                          `json:"context,omitempty"`
	Name     *string                                          `json:"name,omitempty"`
	Synonyms []GoogleCloudContentwarehouseV1SynonymSetSynonym `json:"synonyms,omitempty"`
}
