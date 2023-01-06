package shared

type Seq struct {
	Alphabet    *string `json:"alphabet,omitempty"`
	Md5checksum *string `json:"md5checksum,omitempty"`
	Residues    *string `json:"residues,omitempty"`
	Seqlen      *string `json:"seqlen,omitempty"`
}
